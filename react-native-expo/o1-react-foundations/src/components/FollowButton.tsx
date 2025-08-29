const FollowButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="flex-1 py-2 px-4 bg-sky-400 text-gray-900 rounded-lg font-medium cursor-pointer hover:bg-sky-500 transition"
      onClick={onClick}
    >
      Follow
    </button>
  );
};

export default FollowButton;