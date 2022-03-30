//Require Modules
const express = require('express');
const { Module } = require('module');
const Router = express.Router();
const ApiUsers = require('../controllers/ControllerApiUsers')
const ApiProducts = require('../controllers/ControllerApiProducts')
//Route api/user
Router.get('/user', ApiUsers.index)
//Route Post api/user

//Route api/user/id
Router.get('/user/:id', ApiUsers.profile)

//Route api/products
Router.get('/products', ApiProducts.index)

//Route api/products/:id
Router.get('/products/:id', ApiProducts.detail)
//Export Module

module.exports = Router