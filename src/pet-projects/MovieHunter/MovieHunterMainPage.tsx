




export default function MovieHunterMainPage() {
  

   

   
    return (

  <div className="w-screen h-screen  flex items-center justify-center bg-zinc-800">
        <div className="border-black border-2 rounded-2xl bg-zinc-800 h-[700px] w-[600px]">
          <div className="w-full max-w-md mx-auto mt-4">
            <div className="flex justify-center font-[cursive] text-[20px] text-white bg-zinc-800 border border-white h-[40px] w-auto ml-[5px] mt-[10px] px-[10px] rounded-[30px]">
              MovieFinder
            </div>
                <div className="flex items-center bg-zinc-600 border border-zinc-600 rounded-3xl px-4 py-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex-grow bg-transparent outline-none text-white placeholder-gray-400 text-sm"
                    />
                </div>
          </div>


          <div className=" grid grid-cols-3 gap-2 ml-[30px]">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
        </div>
          

                  
              

        </div>
  </div>
    );
  }

 
