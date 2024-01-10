import React, { useState } from "react";
import { listAPI } from "../../services/API";
import { useEffect } from "react";
import { Button, Modal, Table, message } from "antd";

const UserManage = () => {
  const [deletingMovieId, setDeletingMovieId] = useState(null);
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    listAPI
      .getUser()
      .then((r) => setListUser(r.data.content))
      .catch((e) => console.log(e));
  }, []);
  const columns = [
    {
      // tên cột
      title: "Tài khoản",
      // data index giúp bắt được thuộc tính
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
      //  render: (text) => <img src={text} alt="" className="w-28" />,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      //  render: (text) => <p>{text}</p>,
    },
    {
      title: "SDT",
      dataIndex: "soDT",
      key: "soDT",
      //  render: (text) => <p className="w-96 line-clamp-1">{text}</p>,
    },
    {
      title: "Người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      // render: (text) => <p className="w-96 line-clamp-1">{text}</p>,
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
        <div className="space-x-3">
          <button
            className="px-2 py-4 rounded-md bg-red-300"
            // onClick={() => showDeleteModal(record.taiKhoan)}
            onClick={() => {
              showModal(record.taiKhoan);
            }}
          >
            Delete
          </button>
          <button
            // onClick={() => showEditModal(record.taiKhoan)}
            className="px-2 py-4 rounded-md bg-yellow-300"
          >
            Edit
          </button>
        </div>
      ),
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (taiKhoan) => {
    setIsModalOpen(true);
    setDeletingMovieId(taiKhoan);
  };
  const handleOk = () => {
    listAPI
      .deleteUser(deletingMovieId)
      .then(() => {
        // Sau khi xoá thành công, cập nhật danh sách người dùng
        listAPI
          .getUser()
          .then((r) => setListUser(r.data.content))
          .catch((e) => console.log(e));
        message.success("Xoá thanh cong");

        setIsModalOpen(false);
      })
      .catch((err) => message.error(err.response.data.content));
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <h2 className="font-bold text-2xl text-center mb-5">Quản lý User</h2>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Bạn có chắc chắn muốn xoá nguòi dùng này?</p>
      </Modal>
      <Table
        columns={columns}
        dataSource={listUser}
        pagination={{ pageSize: 10 }}
      ></Table>
    </>
  );
};

export default UserManage;
