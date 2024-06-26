var character = {
  css: null,
  exports: {
    onBeforeMount(props, state) {
      this.state = {
        abilities: props.abilities
      };
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr0="expr0" class="agentscreen" onmousemove="MouseMoveEvent(event)"><h1 expr1="expr1" class="agentname"> </h1><div expr2="expr2" class="agentimgcont"><img expr3="expr3" class="agentimg"/></div><h1 expr4="expr4" class="agent_fullname" id="test"> </h1><h1 expr5="expr5" class="agentdescription"> </h1><div class="agentselect"><img expr6="expr6" draggable="false"/></div></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'id',
      evaluate: _scope => _scope.props.name
    }, {
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'style',
      evaluate: _scope => ['--fromcol: ', _scope.props.bgfromcol, '; --tocol: ', _scope.props.bgtocol].join('')
    }]
  }, {
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.props.name
    }, {
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'style',
      evaluate: _scope => ['--desiredfontsize: ', _scope.props.namesize, 'vh'].join('')
    }]
  }, {
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'style',
      evaluate: _scope => ['--leftoffset: ', _scope.props.charloffset, 'px'].join('')
    }]
  }, {
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'src',
      evaluate: _scope => [_scope.props.img_fpath, _scope.props.charimg_url].join('')
    }, {
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'style',
      evaluate: _scope => ['--size: ', _scope.props.charsize, '%; --bottomoffset: ', _scope.props.charboffset, '%;'].join('')
    }]
  }, {
    redundantAttribute: 'expr4',
    selector: '[expr4]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.props.fullname
    }]
  }, {
    redundantAttribute: 'expr5',
    selector: '[expr5]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.props.chardesc
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template(null, [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        isBoolean: false,
        name: 'src',
        evaluate: _scope => [_scope.props.img_fpath, _scope.ability.imgurl].join('')
      }]
    }]),
    redundantAttribute: 'expr6',
    selector: '[expr6]',
    itemName: 'ability',
    indexName: null,
    evaluate: _scope => _scope.state.abilities
  }]),
  name: 'character'
};

export { character as default };
