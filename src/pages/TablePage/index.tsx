/* eslint-disable @typescript-eslint/no-inferrable-types */
import React, { useRef } from "react";
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { ProTable, TableDropdown } from "@ant-design/pro-components";
import { Button, Dropdown, Space, Tag } from "antd";
// import { getTable } from "@/services/table";

type GithubIssueItem = {
	id: string;
	number: number;
	title: string;
	labels: {
		name: string;
		color: string;
	}[];
	state: string;
	created_at: string;
	updated_at: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
	{
		dataIndex: "index",
		valueType: "indexBorder",
		width: 48
	},
	{
		title: "标题",
		dataIndex: "title",
		copyable: true,
		ellipsis: true,
		tip: "标题过长会自动收缩",
		formItemProps: {
			rules: [
				{
					required: true,
					message: "此项为必填项"
				}
			]
		}
	},
	{
		disable: true,
		title: "状态",
		dataIndex: "state",
		filters: true,
		onFilter: true,
		ellipsis: true,
		valueType: "select",
		valueEnum: {
			all: { text: "超长".repeat(50) },
			open: {
				text: "未解决",
				status: "Error"
			},
			closed: {
				text: "已解决",
				status: "Success",
				disabled: true
			},
			processing: {
				text: "解决中",
				status: "Processing"
			}
		}
	},
	{
		editable: false,
		title: "标签",
		dataIndex: "labels",
		search: false,
		render: (_, record) => (
			<Space>
				{record?.labels?.map(({ name, color }) => (
					<Tag color={color} key={name}>
						{name}
					</Tag>
				))}
			</Space>
		)
	},
	{
		title: "创建时间",
		key: "showTime",
		dataIndex: "created_at",
		valueType: "date",
		sorter: true,
		hideInSearch: true
	},
	{
		title: "创建时间",
		dataIndex: "created_at",
		valueType: "dateRange",
		hideInTable: true,
		search: {
			transform: value => {
				return {
					startTime: value[0],
					endTime: value[1]
				};
			}
		}
	},
	{
		title: "操作",
		valueType: "option",
		key: "option",
		render: (text, record, _, action) => [
			<a
				key="editable"
				onClick={() => {
					action?.startEditable?.(record?.id);
				}}
			>
				编辑
			</a>,
			<a key="view">查看</a>,
			<TableDropdown
				key="actionGroup"
				onSelect={() => action?.reload()}
				menus={[
					{ key: "copy", name: "复制" },
					{ key: "delete", name: "删除" }
				]}
			/>
		]
	}
];

const TablePage: React.FC = () => {
	const actionRef = useRef<ActionType>();
	return (
		<ProTable<GithubIssueItem>
			columns={columns}
			actionRef={actionRef}
			cardBordered
			request={async () => {
				const res: any = await new Promise(resolve => resolve({ data: [{ id: 123 }], code: 200 }));
				return {
					data: res.data,
					success: res.code === 200
				};
			}}
			editable={{
				type: "multiple"
			}}
			rowKey="id"
			search={{
				labelWidth: "auto"
			}}
			headerTitle="高级表格"
			toolBarRender={() => [
				<Button
					key="button"
					icon={<PlusOutlined />}
					onClick={() => {
						actionRef.current?.reload();
					}}
					type="primary"
				>
					新建
				</Button>,
				<Dropdown
					key="menu"
					menu={{
						items: [
							{
								label: "1st item",
								key: "1"
							},
							{
								label: "2nd item",
								key: "2"
							},
							{
								label: "3rd item",
								key: "3"
							}
						]
					}}
				>
					<Button>
						<EllipsisOutlined />
					</Button>
				</Dropdown>
			]}
		/>
	);
};

export default TablePage;
