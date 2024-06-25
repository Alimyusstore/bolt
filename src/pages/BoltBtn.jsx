
function BoltBtn ({textBtn, onClick, style}){
    return (

          <button className="my-8 m- px-5 py-2 ms-4 hover:text-[#d2c3c3]"
            onClick={onClick}
            style={{ ...style, borderRadius: "30px", }}
          >
            {textBtn}
          </button>

    );
}

export default BoltBtn;