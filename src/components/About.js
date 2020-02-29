import React, { Component } from 'react';
import $ from 'jquery'

import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeline: {
        childhood: {
          title: "little",
          id: "dcpic",
          text: "College Park, Maryland is my hometown. When I was little, I liked animals, drawing pictures, and playing with my dad's Apple Macintosh computer.",
        },
        teens: {
          title: "travel",
          id: "abroad",
          text: "In my teens, I had the opportunity to live in Ukraine, South Africa and Brazil with host families. I learned first-hand about wealth disparity and what makes us all the same.",
        },
        college: {
          title: "college",
          id: "college",
          text: "At the University of Otago in Dunedin, New Zealand, I philosophized mostly at philosophy department happy hours. I wrote a dissertation on the possibility of artificial intelligence.",
        },
        between: {
          title: "New Zealand",
          id: "between",
          text: "I was also a singer in an 80s cover band, in the debating society, and the Taekwondo club. These things shaped my life."
        },
        teaching: {
          title: "teaching",
          id: "teaching",
          text: "A few years later, I got into teaching. I loved it. I always wanted to do right by my students and make the best use of their time to gain skills for the real world."
        },
        jeju: {
          title: 'Jeju',
          id: 'jeju',
          text: "I moved to Korea to teach ESL in 2011. I did that for 5 years in the beautiful island of Jeju. I designed fun and wacky lessons plans and I hiked the island's many trails. I watched every episode of HBO's Silicon Valley on maternity leave.",
        },
        philly: {
          title: "Philly",
          id: "philly",
          text: "Back in the states in 2016, I wanted to get into tech. I worked at a coding bootcamp in Philly, using my background in education to help people change their lives. I started learning to code in whatever schedule motherhood would allow.",
        },
        dc: {
          title: "DC",
          id: "dc",
          text: "In 2018, I moved back to DC and worked at yet another coding bootcamp. By then, I had realized I wanted to be like the people I was helping and that programming was my calling. So, I studied software engineering on my own while working full time. With a toddler.",
        },
        coding: {
          title: "Coding",
          id: "coding",
          text: "In 2019 I made this website from scratch. I also became a professional full stack Software Engineer for the first time at GetUpside. In 2020, I am still having a blast, learning Python and Angular at work and using React for side projects.",
        }
      }
    }
  }

//changes what the subtitle and title say depending on page
  changeHeader = () => {
    $('.navtitle').text("About Emily")
    $('.navsubtitle, .navsubtitlestick').text("100% Authentic.")
    $('.navsubtitle, .navsubtitlestick').show()
    $('.navlinks').show()
  }

//cool scroll effect for the images
  parallaxBackground = () => {
    $(window).scroll(function(){
      $("#dcpic").css("background-position", "0% "  + (($(window).scrollTop() / 20) + 10) + "%");
      $("#abroad, #college, #teaching, .story, #coding").css("background-position", "50% "  + (($(window).scrollTop() / 20)) + "%");
      $("#jeju").css("background-position", "0% "  + (($(window).scrollTop() / 60)) + "%");
      $("#between, #dc").css("background-position", "50% "  + (($(window).scrollTop() / 60)) + "%");
    });
  }

// Makes the background get or lose polka dots
  backgroundChange = () => {
    $("body").css({
      'background-color': '#262c2d',
      'background-image':
        `none`
    });

  }

//Timeline div fades in on scroll
  elementsFadeIn = () => {
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop > 30) {
        $('.timeline, .more').animate({
          opacity: '1',
        }, 2000)
      };
    });
  }

  displayTimeline = () => {
    return Object.values(this.state.timeline).map(item =>
      <Fade up>
        <div className="row">
          <div className="event-title">{item.title}</div>
          <div className="event-image" id={item.id}></div>
          <div className="event">{item.text}</div>
        </div>
      </Fade>)
  }

  scrolldown = () => {
    $('.scrolldown').animate({
      bottom: '60px',
    }, 500, function(){
      $('.scrolldown').animate({
        bottom: '40px',
      }, 500, function(){
        $('.scrolldown').animate({
          bottom: '60px',
        }, 500, function(){
          $('.scrolldown').animate({
            bottom: '40px',
          }, 500, function(){
            $('.scrolldown').animate({
              bottom: '60px',
            }, 500, function(){
              $('.scrolldown').animate({
                bottom: '40px',
              }, 500, function(){
                $('.scrolldown').animate({
                  bottom: '60px',
                }, 500, function(){
                  $('.scrolldown').animate({
                    bottom: '40px',
                  }, 500)
                })
              })
            })
          })
        })
      })
    })
    $(window).scroll(function(){
      $(".scrolldown").css("opacity", (1 / $(window).scrollTop() - 1))
    });

  }

//on click, the window goes to the top
  scrollTop = () => {
    $(window).scrollTop(0);
  }




  componentDidMount(){
    {this.changeHeader()}
    {this.parallaxBackground()}
    {this.elementsFadeIn()}
    {this.backgroundChange()}
    {this.scrolldown()}
  }


  render() {
    return (
      <div className="aboutpage">

        <div className="story">I build things and help humanity and to have fun.</div>
        <div className="more">A little more about me</div>
        <div className="timeline">
          {this.displayTimeline()}
        </div>

        <Fade up>
          <div className="why-title">My 'why'</div>
          <div className="why">
            <div className="why-text">I am drawn toward helping others. I like to lift others up. Empathy is a strength I have which allows me to consider all sides of every story and do the right thing. I love to make connections with others and to hear new stories, which is why I enjoy travel and cultures. And I believe that my tech skills will allow me to enhance human connections and help the world come together to make great change in the environment and society.</div>
          </div>
        </Fade>

        <Fade up>
          <div className="why-title">Issues I care about</div>
          <div className="why">
            <div className="why-text">Every day I think about:
              <ul>
                <li>The environment and how all of my actions affect it</li>
                <li>How I can improve society's problems of racial and gender inequity</li>
                <li>The way the education system helps our children thrive</li>
                <li>Benefits and shortfalls of all the government systems I have lived under around the world</li>
              </ul>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="regrets-title">No regrets</div>
          <div className="regrets">
            <div className="regret-box">
              <div className="regret-image">
              </div>

              <div className="regret-text">Sometimes I wish that I had discovered my love of programming years ago. I could have studied computer science in college. But would I have enjoyed programming as much as I now do? I doubt it. Being a mom and being a teacher in particular allowed me to learn how technology truly helps global society. The richness of experiences has led me here. I have a strong desire to build useful things. I don't think I could be as good a programmer without that.</div>
            </div>

          </div>
        </Fade>


        <Fade up>
          <div className="personality-title">How I Operate</div>
          <div className="personality">
            <div className="personality-box"><FontAwesomeIcon icon="fire"/> Challenges are fun. I thrive when I am able to be creative. I know that I am determined enough to get it done, so I am not afraid. There are few parts of any of my side projects that I made when I was changing careers that were made without a toddler pulling on my limbs. I have grit.</div>
            <div className="arrow"><FontAwesomeIcon icon="chevron-right"/></div>
            <div className="arrow-down"><FontAwesomeIcon icon="chevron-down"/></div>
            <div className="personality-box"><FontAwesomeIcon icon="brain"/> My brain doesn't turn off till it's done. I try everything. I research. I talk to others. I read documentation and look at examples. I take mental breaks. I try things and then delete them and try again. Sometimes I am frustrated and I take a break and come back even stronger.</div>
            <div className="arrow"><FontAwesomeIcon icon="chevron-right"/></div>
            <div className="arrow-down"><FontAwesomeIcon icon="chevron-down"/></div>
            <div className="personality-box"><FontAwesomeIcon icon="lightbulb"/> Especially with coding, I am drawn back to it over and over until it's solved because I know the solution probably exists. When I can't find it, I pivot and re-assess my assumptions and the project's building blocks, purpose and trajectory.</div>
          </div>
        </Fade>

        <Fade up>
          <div className="why-title" id="reinvent">Reinvention</div>
          <div className="why">
            <div className="why-text">
              I am always growing and learning, and love to reinvent myself. Do you feel the same way? I'd love to talk.
              <br></br>
              <br></br>
              <div className="quote">"I'm in a new chapter in my life, and I'm not even trying to be who I was. It's so beautiful that children do that to you."
              <br></br>
              - Beyonce</div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="skill-button">
            <Link to="/skills"><div className="skill-click" onClick={() => this.scrollTop()}>Click here to see a list of my skills</div></Link>
          </div>
        </Fade>

        <div className="scrolldown">< FontAwesomeIcon icon={'angle-double-down'} /></div>



        <div className="space"></div>

      </div>
    );
  };


}
