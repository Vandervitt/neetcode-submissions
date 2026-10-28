type Tweet = {
    id: number;
    time: number;
};

type Candidate = {
    userId: number;
    index: number;
    tweet: Tweet;
};

class Twitter {
    private time = 0;
    private tweets = new Map<number, Tweet[]>();
    private following = new Map<number, Set<number>>();

    constructor() {}

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    // 把推文放入每个人自己的推文中，并使用 time 字段来标记新旧关系
    // time 越大越新
    // 取出的时候可以从尾部取出
    postTweet(userId: number, tweetId: number): void {
        let posts = this.tweets.get(userId);
        if (posts === undefined) {
            posts = [];
            this.tweets.set(userId, posts);
        }

        posts.push({ id: tweetId, time: this.time++ });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        // 拿到当前 userId 的关注者 id 的集合
        const authors = new Set(this.following.get(userId));
        // 并把自己加入到集合中，因为自己的推文也算
        authors.add(userId);

        const heap = new MaxPriorityQueue((candidate) => candidate.tweet.time);

        // 找到每一个 author 的最新的推文
        // 维护初始堆
        for (const author of authors) {
            const posts = this.tweets.get(author);
            if (posts === undefined || posts.length === 0) {
                continue;
            }
            const index = posts.length - 1;
            heap.enqueue({
                userId: author,
                index,
                tweet: posts[index],
            });
        }

        const result: number[] = [];
        while (!heap.isEmpty() && result.length < 10) {
            const current = heap.dequeue()!;
            result.push(current.tweet.id);

            if (current.index > 0 && result.length < 10) {
                const index = current.index - 1;
                const posts = this.tweets.get(current.userId)!;

                heap.enqueue({
                    userId: current.userId,
                    index,
                    tweet: posts[index],
                });
            }
        }

        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        if (followerId === followeeId) {
            return;
        }

        let followees = this.following.get(followerId);

        if (followees === undefined) {
            followees = new Set<number>();
            this.following.set(followerId, followees);
        }

        followees.add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        this.following.get(followerId)?.delete(followeeId);
    }
}
