import React from 'react'
import { Layout, Menu } from 'antd';


const { Header, Content, Footer, Sider } = Layout;

export default function Footers() {
    return (
        <div>
            <Footer style={{ textAlign: 'left',background:'black',color:'white' }}>Copyright © 2020 BPVS Agrotech Pvt. Ltd. - All Rights Reserved.</Footer>
        </div>
    )
}
