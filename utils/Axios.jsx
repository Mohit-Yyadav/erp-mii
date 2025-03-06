import axios from 'axios'
import React from 'react'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true, // This will allow session cookies
})

export default instance;