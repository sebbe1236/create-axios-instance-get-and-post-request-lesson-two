import React from "react";
import EditProduct from "../adminfunctions/EditProduct";
import Header from "../layout/heading/Heading";
function EditPostPage() {
  return (
    <>
      <Header heading={"put request/update product"} />
      <EditProduct />
    </>
  );
}

export default EditPostPage;
