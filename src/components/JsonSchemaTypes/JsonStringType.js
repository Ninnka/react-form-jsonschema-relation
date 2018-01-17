import React from 'react';

// * 样式

// * antd 组件
import {
  Button,
  Form
} from 'antd';

import ActionButtons from '@components/ActionButtons';

const FormItem = Form.Item;

class JsonStringType extends React.Component {

  state = {
    borderColor: '',
    propertiesList: []
  };

  stringTypeProperty = [
    'key',
    'type',
    'title',
    'description'
  ]

  constructor () {
    super();
    this.methodsToProp = {
      actionSetTitle: this.actionSetTitle,
      actionSetDescription: this.actionSetDescription,
      actionSetKey: this.actionSetKey
    }
  }

  componentDidMount () {
    this.setState({
      propertiesList: ['key'].concat(Object.keys(this.props.typeProperty[1])),
      borderColor: this.getRandomColor()
    });
    console.log('propertiesList', this.state.propertiesList);
  }
  // * ------------

  getRandomColor () {
    let rand = Math.floor(Math.random( ) * 0xFFFFFF).toString(16);
    if (rand.length === 6) {
      return rand;
    } else {
      return this.getRandomColor();
    }
  }

  // * ------------


  actionSetTitle = () => {
    console.log('json-string-type actionSetTitle');
  }

  actionSetDescription = () => {
    console.log('json-string-type actionSetDescription');
  }

  actionSetKey = () => {
    console.log('json-string-type actionSetKey');
  }

  // * ------------

  deleteSelf = () => {
    this.props.deleteProperty(this.props.typeProperty[0]);
  }

  // * ------------

  render () {
    const propertiesListComp = this.state.propertiesList.map((name) => {
      if (this.stringTypeProperty.indexOf(name) === -1) {
        return '';
      }
      let nameValue = (this.props.typeProperty[1])[name] !== undefined ? (this.props.typeProperty[1])[name] : this.props.typeProperty[0];
      return <p className="init-p" key={ `${ name }` }>{ `${ name }: ${ nameValue }`  }</p>
    });
    return (
      <FormItem className="form-spe-border middle-padding-tb" style={ {
        borderColor: '#' + this.state.borderColor
      } }>
        <ActionButtons {
          ...this.methodsToProp
        } buttonTypes={
          this.stringTypeProperty
        }></ActionButtons>
        <div className="formItemContentLayer">
          <Button type="danger" icon="close" onClick={ this.deleteSelf }/>
          <div className="formItemLayerContentGrow">
            { propertiesListComp }
          </div>
        </div>
      </FormItem>
    );
  }

}

export default JsonStringType;
