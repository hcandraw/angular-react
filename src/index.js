import angular from 'angular';
import { react2angular } from 'react2angular';
import angularComponent from './angular-component';
import ReactComponent from './react-component';
import './style.css';

angular.module('app', [])
    .component('angularComponent', angularComponent)
    .component('reactComponent', react2angular(ReactComponent));

angular.bootstrap(document.getElementById('app'), ['app']);