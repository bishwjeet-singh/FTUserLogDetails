import React, { Component } from 'react'
import './styles/App.css'
import PageHeader from './components/PageHeader'
import HeroSection from './components/HeroSection'
import PageFooter from './components/PageFooter'
import UserGrid from './components/UserGrid'

class App extends Component {

  render() {
  return (
    <>
        <PageHeader />
        <HeroSection />
        <UserGrid />
        <PageFooter />
    </>
  )
  }
}

export default App
