import React, { memo, useCallback } from 'react'
import './Home.scss'
import Icon from '../Icons/Icon'
import SimpleImageSlider from 'react-simple-image-slider';
import * as d3 from "d3";
const images = [
  { url: './images/HomeSlider1.jpg' },
  { url: './images/HomeSlider2.jpg' },
  { url: './images/HomeSlider3.jpg' },
  { url: './images/HomeSlider4.jpg' },
];



function Home(props) {


  const whatWeDoes=[{
    image:"./images/new_zeblearn.jpg",
    title:"Provide Dental Service",
    content:"We provide a range of digital and designing services to startups and small businesses. Taking every aspect of the product or brand into consideration. We believe in a powerful insight driven , design-led approach , making it a right platform for YOU."
  },{
    image:"./images/new_zebb_app.jpg",
    title:"Provide Dental Service",
    content:"We provide a range of digital and designing services to startups and small businesses. Taking every aspect of the product or brand into consideration. We believe in a powerful insight driven , design-led approach , making it a right platform for YOU."
  },{
    image:"./images/new_deco_web.jpg",
    title:"Provide Dental Service",
    content:"We provide a range of digital and designing services to startups and small businesses. Taking every aspect of the product or brand into consideration. We believe in a powerful insight driven , design-led approach , making it a right platform for YOU."
  }];

  const onSwipeImage=useCallback((index)=>{
    console.log("Index",index,d3.selectAll(`.to-do-main-${index}`).select('#side-2').attr("class"));
    if(d3.selectAll(`.to-do-main-${index}`).select('#side-2').attr("class")=='flip'){
      d3.selectAll(`.to-do-main-${index}`).select('#side-2' ).attr('class','flip flip-side-1');
      d3.selectAll(`.to-do-main-${index}`).select('#side-1' ).attr('class','flip flip-side-2');
    }else{
      d3.selectAll(`.to-do-main-${index}`).select('#side-2' ).attr('class','flip');
      d3.selectAll(`.to-do-main-${index}`).select('#side-1' ).attr('class','flip');
    }
    
  },[])
  return (
    <div className="Home">
      <div className="top-static-text">
        <div className="text-static first">
          IC
          <div className="zero-image">
            <Icon icon="SMILE_ICON" className="icon-smile" />{' '}
          </div>
          NIC32
        </div>
        <div className="text-static second">DENTAL</div>
        <div className="text-static third">
          <div className="half-rect-smile">
            <Icon icon="SMILE_HALF_RECT" className="icon-smile" />
          </div>
          CLINIC
        </div>

        <div className="clinic-vision">
          <div className="text">
            Patient happiness and comfort are prioritized in our practice. We
            understand that going to the dentist can cause a lot of worry for
            some people, but with our friendly dentist and excellent staff, you
            can leave your anxieties at the door. We strive to provide great
            service in all areas of dentistry. After all, your smile is your
            most valuable asset, and it reveals a great deal about your oral
            health.
          </div>
        </div>
      </div>
      <div className="slider-in-home">
        <SimpleImageSlider
          width={window.innerWidth <=1199 ? "100%": "80%"}
          height={550}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>

       <div className='creative-thinking'>
        <div className='label-thinking'>Creative Thinking</div>
        <div className='left-right-creative'>
          <div className='left'>
          Unconventional Thinking helps build loyalty and engagement by creating a fun experience for customers.
          </div>
          <div className='right'>
            <div className="icon-creative">
              <Icon icon="CREATIVE_THINKING" className="icon-smile" />
            </div>
          </div>
        </div>
      </div>

      <div className='what-we-do'>
        <div className='label-thinking'>What We Do</div>
        <div className='label-capable'>Capabilities</div>
        {window.innerWidth > 1199 && <div className='list-of-todo'>
          {whatWeDoes.map((data,index)=>{
            return <div key={`to_do${index}`} className='to-do-main'>
              <div className='left'>
                <img src={data.image} width={350} height={450}/>
              </div>
              <div className='right'>
                <div className='to-do-title'>{data.title}</div>
                <div>{data.content}</div></div>
            </div>
          })}
        </div>}
        {window.innerWidth <= 1199 && <div className='list-of-todo'>
          {whatWeDoes.map((data,index)=>{
            return <div key={`to_do${index}`} className={`to-do-main to-do-main-${index}`}>
              <div className='to-do-title'>{data.title}</div>
              <div className='left'>
                <div id="side-1" className='flip'>
                <img src={data.image} width={"100%"} height={450}/>
                <div className='capability-details'>
                  <div className='detailed-text' onClick={()=>{onSwipeImage(index)}}>More Details</div>
                </div>
                </div>
                <div id="side-2" className='flip'>
                  <div className='right'>
                    <div>{data.content}</div>
                  </div>
                  <div className='capability-details'>
                  <div className='detailed-text' onClick={()=>{onSwipeImage(index)}}>Back</div>
                </div>
                </div>
                
              </div>
            </div>
          })}
        </div>}
      </div> 

      
    </div>
  )
}

export default memo(Home)
