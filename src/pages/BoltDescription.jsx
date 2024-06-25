 function BoltDescription ({numbering, title, parag}){
    return (
      <div>
        <div>
          <div className="mb-5">
            <div className="flex gap-4 mb-3">
              <p className=" p-[5px] inline-block rounded-full text-[0.8rem] bg-green-500 text-white">
                {numbering}
              </p>
              <h3 className="font-bold">{title}</h3>
            </div>
            <div>
              <p className="text-[grey] ps-8 text-2l">{parag}</p>
            </div>
          </div>
        </div>
      </div>
    );
 }

 export default BoltDescription;