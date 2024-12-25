const LatestService = () => {
  return (
    <div className="my-10 lg:w-[90%] md:w-[60%] sm:w-[30%]  mx-auto">
      <h1 className="text-4xl text-center">
        Latest <span className="text-fuchsia-800">Posts</span>
      </h1>
      <p className="text-gray-400 text-center italic w-2/4 mx-auto mt-2">
        Discover, review, and rate your favorite books. Join a community of book
        lovers and share your reading experiences.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  my-12 gap-8">
        {/* {posts.slice(0, 6).map((post) => (
          <PostCard key={post.id} post={post} />
        ))} */}
      </div>
    </div>
  );
};

export default LatestService;
