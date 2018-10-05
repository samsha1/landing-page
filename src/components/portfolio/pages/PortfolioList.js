import React from 'react';
import { IconContext } from "react-icons";
import { FaPhp,FaDocker,FaJs,FaHtml5,FaReact,FaCss3Alt,FaGofore } from 'react-icons/fa';
import PlayNine from '../../home/PlayNine';

export default [{
	name:'OBTRS',
	render:(
	  <div className="portfolio-item">
        <div className="portfolio-item__title">OBTRS</div>

        <div className="portfolio-item__desc">
          Online Bus Ticket Reservation System is my self project that is built in codeigniter,mysql and javascript.
        </div>
        <div className="portfolio-item__icon">
          <IconContext.Provider value={{ color: "#3B80F7", size:"1em",className: "global-class-name" }}><FaPhp /><FaJs/><FaHtml5/></IconContext.Provider>
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="http://obtrs.samrat.01cloud.com">Visit Site</a>
        </div>
      </div>

		)
},

{
	'name':'Walk Through Docker',
	render:(
	  <div className="portfolio-item">
        <div className="portfolio-item__title">Walk Through Docker</div>

        <div className="portfolio-item__desc">
          Simple Docker Implementation with Go API.
        </div>
        <div className="portfolio-item__icon">
          <IconContext.Provider value={{ color: "#3B80F7",size:"1em", className: "global-class-name" }}><FaDocker /><FaGofore/></IconContext.Provider>
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="https://dev.to/samsha1/walk-through-docker-5bm3">Blog</a>
        </div>
      </div>

		)
},
{
	'name':'BerryBytes',
	render:(
	  <div className="portfolio-item">
        <div className="portfolio-item__title">BerryBytes</div>

        <div className="portfolio-item__desc">
          BerryBytes is indian based hosting company that provide hosting service, domain Registration and many more.This Project is still in Development Stage.``
        </div>
        <div className="portfolio-item__icon">
          <IconContext.Provider value={{ color: "#3B80F7",size:"1em", className: "global-class-name" }}><FaPhp /><FaHtml5/><FaCss3Alt/><FaReact/></IconContext.Provider>
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="http://berrybytes.com">Visit Site</a>
        </div>
      </div>

		)
},
{
	'name':'PlayNine',
	render:(
	  <div className="portfolio-item">
        <div className="portfolio-item__title">PlayNine</div>

        <div className="portfolio-item__desc">
          PlayNine is a simple game built in ReactJs.It allows users to select random number based on random stars generated.
          <p>Inspired by Samer Buna.</p>
        </div>
        <div className="portfolio-item__icon">
          <IconContext.Provider value={{ color: "#3B80F7",size:"1em", className: "global-class-name" }}><FaHtml5 /><FaReact/><FaCss3Alt/></IconContext.Provider>
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/samsha1/React-Random-Game">More</a>
          <PlayNine/>
        </div>
      </div>

		)
}]