import React, { useState, useEffect } from 'react';
import '../../src/App.css';

const apiKey ="";
const url='https://api.thecatapi.com/v1/images/search';


function Cat() {
    const [ catUrl, setCatUrl ] = useState("https://cdn2.thecatapi.com/images/9ch.jpg");
    const [ catUrl1, setCatUrl1 ] = useState("https://cdn2.thecatapi.com/images/9ue.jpg");
    const [ catUrl2, setCatUrl2 ] = useState("https://cdn2.thecatapi.com/images/bfa.jpg");
    const [ catUrl3, setCatUrl3 ] = useState("https://cdn2.thecatapi.com/images/w6FeZ0g-C.jpg");
    const [ catUrl4, setCatUrl4 ] = useState("https://cdn2.thecatapi.com/images/MTc4MDM3NA.jpg");
    const [ catUrl5, setCatUrl5 ] = useState("https://cdn2.thecatapi.com/images/8tv16WIzJ.jpg");
    const [ catUrl6, setCatUrl6 ] = useState("https://cdn2.thecatapi.com/images/MTU3MzYwNw.jpg");
    const [ catUrl7, setCatUrl7 ] = useState("https://cdn2.thecatapi.com/images/755.jpg");
    const [ catUrl8, setCatUrl8 ] = useState("https://cdn2.thecatapi.com/images/250.jpg");
    const [ catUrl9, setCatUrl9 ] = useState("https://cdn2.thecatapi.com/images/29g.jpg"); 
  
  
    useEffect(() => {
      getCat();
    }, []);
  
    useEffect(() => {
      getCat1();
    }, []);
  
    useEffect(() => {
      getCat2();
    }, []);
  
    useEffect(()  => {
      getCat3();
    }, []);
  
    useEffect(() => {
      getCat4();
    }, []);
  
    useEffect(() => {
      getCat5();
    }, []);
  
    useEffect(() => {
      getCat6();
    }, []);
  
    useEffect(() => {
      getCat7();
    }, []);
  
    useEffect(() => {
      getCat8();
    }, []);
  
    useEffect(() => {
      getCat9();
    }, []);
  
  
    const getCat = () => {
      console.log("Hello world");
  
      fetch(url, {
        headers: {
          "x-api-key": apiKey
        }
      })
        .then((res)=> res.json())
        .then((cats) => {
          console.log("Cats: ", cats);
          const catUrl = cats[0].url;
  
          setCatUrl(catUrl);
        });
      }
      console.log("Cat URL: ", catUrl);
  
  
  
  
      const getCat1 = () => {
        console.log("Hello world");
    
        fetch(url, {
          headers: {
            "x-api-key": apiKey
          }
        })
          .then((res)=> res.json())
          .then((cats) => {
            console.log("Cats: ", cats);
            const catUrl1 = cats[0].url;
    
            setCatUrl1(catUrl1);
          });
        }
        console.log("Cat URL: ", catUrl1);
  
  
  
      
        const getCat2 = () => {
          console.log("Hello world");
      
          fetch(url, {
            headers: {
              "x-api-key": apiKey
            }
          })
            .then((res)=> res.json())
            .then((cats) => {
              console.log("Cats: ", cats);
              const catUrl2 = cats[0].url;
      
              setCatUrl2(catUrl2);
            });
          }
          console.log("Cat URL: ", catUrl2);
  
  
  
          const getCat3 = () => {
            console.log("Hello world");
        
            fetch(url, {
              headers: {
                "x-api-key": apiKey
              }
            })
              .then((res)=> res.json())
              .then((cats) => {
                console.log("Cats: ", cats);
                const catUrl3 = cats[0].url;
        
                setCatUrl3(catUrl3);
              });
            }
            console.log("Cat URL: ", catUrl3);
  
  
  
            const getCat4 = () => {
              console.log("Hello world");
          
              fetch(url, {
                headers: {
                  "x-api-key": apiKey
                }
              })
                .then((res)=> res.json())
                .then((cats) => {
                  console.log("Cats: ", cats);
                  const catUrl4 = cats[0].url;
          
                  setCatUrl4(catUrl4);
                });
              }
              console.log("Cat URL: ", catUrl4);
  
  
  
              const getCat5 = () => {
                console.log("Hello world");
            
                fetch(url, {
                  headers: {
                    "x-api-key": apiKey
                  }
                })
                  .then((res)=> res.json())
                  .then((cats) => {
                    console.log("Cats: ", cats);
                    const catUrl5 = cats[0].url;
            
                    setCatUrl5(catUrl5);
                  });
                }
                console.log("Cat URL: ", catUrl5);
  
  
  
                const getCat6 = () => {
                  console.log("Hello world");
              
                  fetch(url, {
                    headers: {
                      "x-api-key": apiKey
                    }
                  })
                    .then((res)=> res.json())
                    .then((cats) => {
                      console.log("Cats: ", cats);
                      const catUrl6 = cats[0].url;
              
                      setCatUrl6(catUrl6);
                    });
                  }
                  console.log("Cat URL: ", catUrl6);
  
  
  
                  const getCat7 = () => {
                    console.log("Hello world");
                
                    fetch(url, {
                      headers: {
                        "x-api-key": apiKey
                      }
                    })
                      .then((res)=> res.json())
                      .then((cats) => {
                        console.log("Cats: ", cats);
                        const catUrl7 = cats[0].url;
                
                        setCatUrl7(catUrl7);
                      });
                    }
                    console.log("Cat URL: ", catUrl7);
  
  
                    const getCat8 = () => {
                      console.log("Hello world");
                  
                      fetch(url, {
                        headers: {
                          "x-api-key": apiKey
                        }
                      })
                        .then((res)=> res.json())
                        .then((cats) => {
                          console.log("Cats: ", cats);
                          const catUrl8 = cats[0].url;
                  
                          setCatUrl8(catUrl8);
                        });
                      }
                      console.log("Cat URL: ", catUrl8);
  
  
                      
                      const getCat9 = () => {
                        console.log("Hello world");
                    
                        fetch(url, {
                          headers: {
                            "x-api-key": apiKey
                          }
                        }) 
                          .then((res)=> res.json())
                          .then((cats) => {
                            console.log("Cats: ", cats);
                            const catUrl9 = cats[0].url;
                    
                            setCatUrl9(catUrl9);
                          });
                        }
                        console.log("Cat URL: ", catUrl9);
              
  
  return (
    <div classname="app">
      <h1>Feline Find</h1>
        <div className="img">
          <img src={catUrl} alt=""onClick={getCat}/>
          <img src={catUrl1} alt=""onClick={getCat1} />
          <img src={catUrl2} alt=""onClick={getCat2}/>
          <img src={catUrl3} alt=""onClick={getCat3} />
          <img src={catUrl4} alt=""onClick={getCat4}/>
          <img src={catUrl5} alt=""onClick={getCat5} />
          <img src={catUrl6} alt=""onClick={getCat6}/>
          <img src={catUrl7} alt=""onClick={getCat7} />
          <img src={catUrl8} alt=""onClick={getCat8}/>
          <img src={catUrl9} alt=""onClick={getCat9} />
      </div>
      </div>
  );  
}               

export default Cat;