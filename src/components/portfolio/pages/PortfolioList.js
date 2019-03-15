import React from 'react';
import { IconContext } from "react-icons";
import { FaPhp,FaDocker,FaJs,FaHtml5,FaReact,FaCss3Alt,FaGofore,FaWordpress,FaMagento,FaAws,FaJenkins,FaGithub,FaLaravel  } from 'react-icons/fa';
import PlayNine from '../../home/PlayNine';

export default [
{
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
  'name':'MenuBoard Manager',
  render:(
    <div className="portfolio-item">
        <div className="portfolio-item__title">MenuBoard Manager</div>
        <div className="portfolio-item__desc">
          MenuBoard Manager (MBM) is software modules that manages hundreds of restaurants menu monitor with high brightness commercial displays, easy content management software, creative services and outstanding technical support across the globe.
        </div>
        <div className="portfolio-item__icon">
          <IconContext.Provider value={{ color: "#3B80F7",size:"1em", className: "global-class-name" }}><FaPhp /><FaHtml5/><FaCss3Alt/><FaWordpress/></IconContext.Provider>
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="https://osmsolutions.zendesk.com/hc/en-us">Visit Site</a>
        </div>
      </div>

    )
},
{
  'name':'Getting Started in CI/CD for Beginners',
  render:(
    <div className="portfolio-item">
        <div className="portfolio-item__title">Getting Started in CI/CD for Beginners</div>
        <div className="portfolio-item__desc">The CI/CD pipeline is one of the best practices for devops teams to implement, for delivering code changes more frequently and reliably. Continuous Integration and Delivery Flow With Jenkins, AWS and Docker.</div>
        <div className="portfolio-item__icon">
          <IconContext.Provider value={{ color: "#3B80F7",size:"1em", className: "global-class-name" }}><FaAws/> <FaJenkins/> <FaDocker/><FaGithub/></IconContext.Provider>
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="https://dev.to/samsha1/getting-started-in-cicd-for-begineers-1lp8">Blog</a>
        </div>
    </div>

    )
},
{
  'name':'Steps to enable CORS on Lumen API',
  render:(
    <div className="portfolio-item">
        <div className="portfolio-item__title">Steps to enable CORS on Lumen API</div>
        <div className="portfolio-item__desc">You are building application in different platform and now you need to share resource between these application. How can you do it?? You simply add cors middleware. Know More in Blog.
        </div>
        <div className="portfolio-item__icon">
          <IconContext.Provider value={{ color: "#3B80F7",size:"1em", className: "global-class-name" }}><FaLaravel /> <FaReact/></IconContext.Provider>
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="https://dev.to/samsha1/steps-to-enable-cors-on-lumen-api-420k">Blog</a>
        </div>
    </div>

    )
},
{
  'name':'event.stopPropagation()',
  render:(
    <div className="portfolio-item">
        <div className="portfolio-item__title">event.stopPropagation ()</div>
        <div className="portfolio-item__desc">Confused of undefined property error in Javascript. Used Most Still Underrated
        </div>
        <div className="portfolio-item__icon">
          <IconContext.Provider value={{ color: "#3B80F7",size:"1em", className: "global-class-name" }}><FaReact /> <FaJs/></IconContext.Provider>
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="https://dev.to/samsha1/eventstoppropagation-3fhm">Blog</a>
        </div>
    </div>

    )
},
{
  'name':'Gregory Jewellers',
  render:(
    <div className="portfolio-item">
        <div className="portfolio-item__title">Gregory Jewellers</div>
        <div className="portfolio-item__desc">Gregory manages piece of crafted and fine jewellery, dealing with multiple brands like raymond-weil, IWC, Breitling etc. It deals with many jewellery and watches brands.
        </div>
        <div className="portfolio-item__icon">
          <IconContext.Provider value={{ color: "#3B80F7",size:"1em", className: "global-class-name" }}><FaPhp /><FaHtml5/><FaCss3Alt/><FaMagento/></IconContext.Provider>
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="https://osmsolutions.zendesk.com/hc/en-us">Visit Site</a>
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