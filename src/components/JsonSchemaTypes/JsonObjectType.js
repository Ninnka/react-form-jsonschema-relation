import React from 'react';

// * 样式
// import styles from '@less/JsonSchemaTypes/json-object-type.less';

// * antd 组件
import {
  Form
} from 'antd';

import SchemaCreator from '@components/SchemaCreator';
import ActionButtons from '@components/ActionButtons';

// import JsonStringType from '@components/JsonSchemaTypes/JsonStringType';
// import JsonArrayType from '@components/JsonSchemaTypes/JsonArrayType';

import JsonTypeCompList from '@components/JsonSchemaTypes/JsonTypeCompList';

class JsonObjectType extends React.Component {
  state = {
    showSchemaCreator: false,
    propertiesList: []
  };

  objectTypeProperty = [
    'title',
    'description',
    'properties',
    'required',
  ]

  objectTypePropertySpec = [
    'key',
    'definitions',
  ]

  constructor () {
    super();
    this.methodsToProp = {
      actionAddProperty: this.actionAddProperty,
      actionSetRequired: this.actionSetRequired,
      actionSetTitle: this.actionSetTitle,
      actionSetDescription: this.actionSetDescription,
      actionSetDefinitions: this.actionSetDefinitions,
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('nextProps', nextProps);
    if (nextProps.properties) {
      this.setState({
        propertiesList: Object.entries(nextProps.properties)
      });
    }
  }

  componentDidMount () {
  }

  // * ------------

  setNewProperty = (newProperty) => {
    this.props.setNewProperty(newProperty);
  }

  deleteProperty = (keyPath) => {
    this.props.deleteProperty(keyPath);
  }

  closeSchemaCreator = () => {
    this.setState({
      showSchemaCreator: false
    });
  }

  // * ------------

  actionAddProperty = () => {
    this.setState({
      showSchemaCreator: true
    });
  }

  actionSetRequired = () => {
  }

  actionSetTitle = () => {
  }

  actionSetDescription = () => {
  }

  actionSetDefinitions = () => {
  }

  actionSetKey = () => {
  }

  // * ------------

  render () {
    return (
      <div className="form-spe-border middle-padding">
        <ActionButtons {
          ...this.methodsToProp
        } buttonTypes={
          this.props.outerObject ? this.objectTypeProperty.concat('definitions') : this.objectTypeProperty.concat('key')
        }></ActionButtons>
        <div className="ant-form ant-form-horizontal">
          <JsonTypeCompList propertiesList={
            this.state.propertiesList
          } deleteProperty={
            this.deleteProperty
          } setNewProperty={
            this.setNewProperty
          }></JsonTypeCompList>
        </div>
        {
          this.state.showSchemaCreator &&
          <SchemaCreator closeSchemaCreator={ this.closeSchemaCreator } setNewProperty={ this.setNewProperty }></SchemaCreator>
        }
      </div>
    );
  }
}

export default JsonObjectType;
