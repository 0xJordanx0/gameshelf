import { Link } from "react-router-dom";

export default function ChatMessageRecipient({
  user,
  message,
  yourId,
  chat,
  userInfo,
  index,
}) {
  const displayData =
    yourId.id === user[0].users.id ? user[0].your : user[0].users;
  function renderUsername() {
    return displayData.username.charAt(0).toUpperCase();
  }
  // console.log(user, message, yourId, chat);

  const avatarContent = displayData.avatar_image ? (
    <Link
      to={`/profile/${displayData.username}`}
      className="flex h-11 w-11 shrink-0 items-center justify-center "
    >
      <img
        className="rounded-full "
        src={displayData.avatar_image}
        alt="User Avatar"
      />
    </Link>
  ) : (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
      {renderUsername()}
    </div>
  );

  return (
    <div className="col-start-1 col-end-11 rounded-lg p-3">
      <div className="flex flex-row items-center">
        {avatarContent}
        <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
}
