import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";

function UsersList() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>UsersList</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
        </div>
      )}
    </div>
  );
}
export default UsersList;
