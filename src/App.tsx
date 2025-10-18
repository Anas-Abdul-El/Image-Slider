
function App() {

  const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  return (
    <>
      <div className="w-full h-svh overflow-hidden text-center bg-black">
        <div className="relative w-50 h-60 top-1/5 left-190 transform-3d transform-(--transform-3d) animate-autorun" style={{ "--quantity": 10 }}>
          {
            arr.map(ele => {
              return (
                <div className="item absolute inset-0 border-2 border-white border-solid" style={{ "--position": ele }}>
                  <img className="w-full h-full object-cover" src={`/dragon_${ele}.jpg`} alt="" />
                </div>
              )
            })
          }
        </div>
        <section className="relative top-1/2 left-1/10 w-fit ">
          <h1 className="text-9xl  text-black "> Anas Abdul El</h1>
        </section>
      </div>
    </>
  )
}

export default App