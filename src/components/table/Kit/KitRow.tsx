const KitRow = ({ user }: any) => {
  if (!user || !user.customer) {
    return <></>;
  }
  return (
    <tr>
      <td>{user.customer?.firstName || "N/A"}</td>
      <td>{user.card?.cardNumber || "N/A"}</td>
      <td>{user.customer?.emailId || "N/A"}</td>
      <td>{user.customer?.mobileNumber || "N/A"}</td>
      <td>{user.card?.cardNetwork || "N/A"}</td>
      <td>
        <div className="user-show">
          <button>{user.account ? "View" : "Create Account"}</button>
        </div>
      </td>
    </tr>
  );
};

export default KitRow;
