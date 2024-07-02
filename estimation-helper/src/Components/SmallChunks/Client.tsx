import clients from "../../Data/client";

export default function Clients() {
    return (
        <section className="w-full py-2 mt-8 bg-white shadow-xl">
            <div className="container  items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-1">
                    <h2 className="text-[30px] font-bold tracking-tighter mb-1 text-[#007373] ">Our Clients</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-8 p-5 py-auto ">
                    {clients.map((data) => {
                        return (
                            <img className="h-10 transition-transform transform hover:scale-150 hover:z-10" src={data} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}