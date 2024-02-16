import { DatePicker, Typography, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import CtSelect from "./CtSelect";
import { useState } from "react";
import axios from "axios";
const { Text } = Typography;

const AddModal = ({ open, onClose }) => {
	const [data, setData]=useState({
		data:'',
		title:'',
		opt:'',
		msg:''
	})

	const [dataOpt, setDataOpt]=useState();

	const handleOk = async () => {
		setData({
			...data,
		})
		await axios.post('http://localhost:4000/test', data)
		onClose();
	}

	const handleCancel = () => {
		onClose();
	}

	//날짜변경
	const dateChange = (date, dateString) => {
		console.log(dateString);
		setData({
			...data,
			date: dateString
		})
	}

	const titleChange = (e) => {
		setData({
			...data,
			title: e.target.value
		})
	}

	const msgChange = (e) => {
		setData({
			...data,
			msg: e.target.value
		})
	}


	return (
		<Modal title="Basic Modal" open={open} onOk={handleOk} onCancel={handleCancel}>
			<p><DatePicker onChange={dateChange} /></p>
			<p><CtSelect optFun={setDataOpt} /></p>
			<p><Text onChange={titleChange}>Title</Text><Input /></p>
			<p><TextArea rows={3} style={{ resize: 'none' }} onChange={msgChange}/></p>
		</Modal>
	)
}
export default AddModal;