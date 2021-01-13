import React from 'react';
import { Steps } from 'antd';
import {Link} from 'react-router-dom'
const CheckoutSteps = ({current}) => {
    const { Step } = Steps;
    return (
        <Steps
            type="navigation"
            size="small"
            current={current}
            // onChange={this.onChange}
            className="site-navigation-steps"
        >
            <Step status={current>=0?'finish':'wait'} title="finish 1" re>
                <Link to='/'>sad</Link>
            </Step>
            <Step status={current>=1?'finish':'wait'}title="finish 2" />
            <Step status={current>=2?'finish':'wait'} title="current process" />
            <Step status={current>=3?'finish':'wait'} title="wait" disabled />
        </Steps>
    );
};

export default CheckoutSteps;