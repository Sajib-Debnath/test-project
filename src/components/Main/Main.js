import React, { Component } from 'react';
import ResponsiveTable from '../ResponsiveTable/ResponsiveTable';
import SearchButton from '../SearchButton/SearchButton';

const rows = [
  { name: "Marywood University", Website: "http://www.marywood.edu" },
  { name: "Lindenwood University", Website: "http://www.lindenwood.edu" },
  { name: "Sullivan University", Website: "http://sullivan.edu" },
  { name: "Florida State College of Jacksonville", Website: "http://www.fscj.edu" },
  { name: "Xavier University", Website: "http://www.Xavier.edu" },
  { name: "Tusculum College", Website: "http://www.home.tusculum.edu" },
  { name: "Clarement School of Theology", Website: "http://www.cst.edu" },
  { name: "Columbia College(SC)", Website: "http://www.columbiasc.edu" },
  { name: "Chabot-Las Positas Community College District", Website: "http://clpccd.edu" },
  { name: "Keller Graduate School of ManWebsitement", Website: "http://www.keller.edu" },
  { name: "Monroe College", Website: "http://monroecollege.edu" },
  { name: "San Mateo Community College District", Website: "http://smccd.edu" },]

const headings = ['Name', 'Website(s)']






class Main extends Component {

  render() {
    return (
      <div className='table-container'>
        <ResponsiveTable rows={rows} headings={headings} />
        <SearchButton />
      </div>
    );
  }
}

export default Main;