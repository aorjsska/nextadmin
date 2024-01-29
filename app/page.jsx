const Homepage = () => {
  return (
      <body>
        <div className="jss32" id="header">
          Header
        </div>
        <div className="jss33" id="main_layout">
          <div style={{
            minHeight: "410px",
            position: "absolute",
            minWidth: "1200px",
            height: "100%",
            width: "100%"
          }}>
            <div className="jss165" id="content_layout">
              <div 
                id="selected_layout"
                style={{
                  // background: "red",
                  width:"100%",
                  height:"100%"
                }}
              >
                <div
                  id="selected_menuItem"
                  style={{
                    top:0,
                    left:0,
                    right:0,
                    width:"240px",
                    bottom:0,
                    margin:"4px",
                    position:"absolute",
                    // background:"red",
                    background:"#FFFFFF",
                    borderRadius:"4px"
                  }}
                >
                  <div
                    id="selected_menu_tab"
                    style={{
                      width:"100%",
                      height: "44px",
                      // background:"red"
                    }}
                  >
                    Selected Menu Tab
                  </div>
                  <div 
                    id="selected_menu_main"
                    style={{
                      width:"100%",
                      height:"calc(100% - 49px)",
                      background:"blue"
                    }}
                  >
                    <div
                      id="selected_menu_main_layout"
                      style={{
                        height: "100%",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        id="selected_menu_main_layout_header"
                        style={{
                          width: "100%",
                          minHeight: "36px",
                          background: "green",
                        }}
                      >
                        Selected Menu Main Header
                      </div>
                      <div
                        id="selected_menu_main_layout_main"
                        style={{
                          width:"100%",
                          minHeight: "36px",
                        }}
                      >
                        Selected Menu Main Column
                      </div>
                      <div
                        style={{
                          overflow:"auto"
                        }}
                      >
                        <div style={{width:"100%", height:"500px",background:"yellow"}}></div>
                        <div style={{width:"100%", height:"500px",background:"purple"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="selected_menuItem_layout"
                  style={{
                    left:"248px",
                    width:"calc(100% - 248px)",
                    height:"calc(100% - 8px)",
                    margin:"4px 0px",
                    display:"flex",
                    position:"absolute",
                  }}
                >
                  <div
                    style={{
                      width: "calc(100% - 4px)",
                      height: "100%",
                      display: "flex",
                      borderRight: "none",
                      borderBottom: "none",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        width:"100%",
                        height:"30px",
                        display:"flex",
                        position:"relative",
                        background:"#F3F6FA"
                      }}
                    >
                      Selected Menu Item Chart Title
                    </div>
                    <div
                      style={{
                        width:"100%",
                        height:"40px",
                        background:"#FFFFFF",
                        flexShrink:0,
                      }}
                    >
                      Selected Menu Item Chart Graph
                    </div>
                    <div
                      style={{
                        flex:"1 1 auto",
                        width: "100%",
                        position:"relative",
                        background:"#FFFFFF",
                        // background:"red",
                        borderRadius:"0px 0px 4px 4px",
                      }}
                    >
                    </div>
                    <div
                      style={{
                        height:"284px",
                        marginTop: "4px",
                        color:"#5D606D",
                        display:"flex",
                        position:"relative",
                        background:"#FFFFFF",
                        flexShrink:0,
                        borderRadius:"4px",
                        flexDirection:"column"
                      }}
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="jss370" id="sidebar" style={{color:"white"}}>
              Sidear
            </div>
            <div className="jss468" id="footer">
              Footer
            </div>
          </div>
        </div>
    </body>
  )
}

export default Homepage