import React, { Component } from 'react';

//class DescribeText extends Component {
//    render() {
//        return (
//            <div>
//                
//            </div>
//        );
//    }
//}

//class TransProp extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {checked: false};
//        this.handleClick = this.handleClick.bind(this);
//    }
//    handleClick(event) {
//        this.setState({checked: !this.state.checked});
//    }
//    render() {
//        var text = this.state.checked ? '选中':'没选中';
//        return (
//            <div onClick={this.handleClick}>
//                选择状态: {text}
//            </div>
//        );
//    }
//}
    
var DescribeText = React.createClass({
  componentWillReceiveProps: function (nextProps)
  {
      console.info("componentWillReceiveProps");
      console.info("nextProps",nextProps,Date.now());
  },
    render: function () {
        return (
            <div>
                你的选择{this.props.descibe} 
            </div>
        );
    }
});

var TransProp = React.createClass({
    getInitialState: function () {
        return {checked:false,text:""};
    },
    handleClick: function () {
        this.setState({checked: !this.state.checked,text:"change"})
    },
    render: function () {
        var text = this.state.checked ? '选中':'没选中'

        return (
            <div onClick={this.handleClick}>
                //选择状态: {text}
                <DescribeText descibe={this.state.text}>
                </DescribeText>
            </div>
        );
    }
});


export default TransProp;
