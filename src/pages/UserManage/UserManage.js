import React, { useState } from "react";
import { listAPI } from "../../services/API";
import { useEffect } from "react";
import { Button, Form, Input, Modal, Table, message } from "antd";

const UserManage = () => {
  const [deletingMovieId, setDeletingMovieId] = useState(null);
  const [listUser, setListUser] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editingUserInfo, setEditingUserInfo] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    listAPI
      .getUser()
      .then((r) => setListUser(r.data.content))
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    if (editingUserId) {
      listAPI
        .getUserById(editingUserId)
        .then((response) => setEditingUserInfo(response.data.content))
        .catch((error) => console.error(error));
    }
  }, [editingUserId]);
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
              showDeleteModal(record.taiKhoan);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => showEditModal(record.taiKhoan)}
            className="px-2 py-4 rounded-md bg-yellow-300"
          >
            Edit
          </button>
        </div>
      ),
    },
  ];

  const showDeleteModal = (taiKhoan) => {
    setIsDeleteModalOpen(true);
    setDeletingMovieId(taiKhoan);
  };

  const showEditModal = (taiKhoan) => {
    setIsEditModalOpen(true);
    setEditingUserId(taiKhoan);
  };
  const handleDeleteOk = () => {
    listAPI
      .deleteUser(deletingMovieId)
      .then(() => {
        listAPI
          .getUser()
          .then((r) => setListUser(r.data.content))
          .catch((e) => console.log(e));
        message.success("Xoá thành công");
        setIsDeleteModalOpen(false);
      })
      .catch((err) => message.error(err.response.data.content));
  };
  const handleEditOk = () => {
    const updatedUserInfo = {
      taiKhoan: editingUserId,
      matKhau: editingUserInfo.matKhau,
      email: editingUserInfo.email,
      soDt: editingUserInfo.soDT,
      maLoaiNguoiDung: editingUserInfo.maLoaiNguoiDung,
      hoTen: editingUserInfo.hoTen,
      // Add other fields you want to update here
    };
    console.log(updatedUserInfo);
    listAPI
      .updateUser(updatedUserInfo)
      .then(() => {
        listAPI
          .getUser()
          .then((r) => setListUser(r.data.content))
          .catch((e) => console.log(e));
        message.success("Cập nhật thành công");
        setIsEditModalOpen(false);
        setEditingUserId(null);
        setEditingUserInfo(null); // Reset user info after editing is complete
      })
      .catch((err) => console.log(err));
    // .catch((err) => message.error(err.response.data.content));
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
    setEditingUserId(null);
    setEditingUserInfo(null);
  };
  const handleFormChange = (changedValues, allValues) => {
    setEditingUserInfo(allValues);
  };

  const editModalContent = (
    <>
      {editingUserInfo && (
        <Form initialValues={editingUserInfo} onValuesChange={handleFormChange}>
          <Form.Item label="Tài khoản" name="taiKhoan">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Họ tên" name="hoTen">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="soDT">
            <Input />
          </Form.Item>
          <Form.Item label="Người dùng" name="maLoaiNguoiDung">
            <Input />
          </Form.Item>
          <Form.Item label="Mật khẩu" name="matKhau">
            <Input />
          </Form.Item>
        </Form>
      )}
      <p>Bạn có chắc chắn muốn cập nhật thông tin người dùng này?</p>
    </>
  );

  return (
    <>
      <h2 className="font-bold text-2xl text-center mb-5">Quản lý User</h2>

      <Modal
        title="Basic Modal"
        open={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleCancel}
      >
        <p>Bạn có chắc chắn muốn xoá nguòi dùng này?</p>
      </Modal>

      <Modal
        title="Chỉnh sửa thông tin người dùng"
        open={isEditModalOpen}
        onOk={handleEditOk}
        onCancel={handleCancel}
      >
        {editModalContent}
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
