export default function Patterns(){
    const patterns=[
        "/one.png","/two.png","/three.png","/four.png","/five.png","/six.png"
    ]
    return(
        <div className="mx-auto container px-20 pb-10 flex flex-col gap-8">
            <h1 className="text-2xl font-semibold text-[#0086AD] ">Our Patners</h1>
          <div className="flex md:justify-between items-start  justify-center">
          {
                patterns.map((pattern,index)=>(
                    <img key={index} src={pattern} alt="" className="w-34 h-10" />
                ))
            }

          </div>

        </div>
    )
}