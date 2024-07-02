import Data from '../Data/IndoreTeam'
import '../index.css'
import banner from '../assets/team/bannerTeam.jpg'
import Clients from '../Components/SmallChunks/Client'

export default function OurTeam() {
    return (
        <>
        <div className="max-w-5xl mx-auto pt-12 px-4 sm:px-6 lg:px-8 animate-fade">
            {Data.slice(0, 1).map((data, index) => {
                return (
                    <div className='flex'>
                        <div className='flex mx-auto px-auto'>
                            <div className="flex flex-col items-center">
                                <div className="relative w-32 h-32 mb-4">
                                    <img
                                        src={data.image || 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg'}
                                        alt={data.name}
                                        className="rounded-full w-full h-full object-cover shadow-2xl transition-transform transform hover:scale-150 hover:z-10"
                                    />
                                </div>
                            </div>
                            <div className='pl-5'>
                                <h2 className="text-3xl font-bold text-startr">Team Digital Technology</h2>
                                <p className="text-muted-foreground text-sm text-[#616161]">This department collaborates with a diverse range of clients across the globe, with the goal of providing high-quality deliverables to meet their needs and expectations. Our commitment is to ensure excellence and satisfaction for our clients through our services.</p>
                                <h3 className="text-lg font-semibold mb-1 text-[#007373]">{data.name}</h3>
                                <p className="text-muted-foreground text-sm text-[#616161]">{data.role}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <hr className="h-[5px] my-2 mb-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {Data.slice(1, Data.length).map((data, index) => {
                    return (
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-32 mb-4">
                                <img
                                    src={data.image || 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg'}
                                    alt={data.name}
                                    className="rounded-full w-full h-full object-cover shadow-2xl transition-transform transform hover:scale-150 hover:z-10"
                                />
                            </div>
                            <div className='justify-center'>
                            <h3 className="text-lg font-semibold mb-1 text-xs text-[#007373]">{data.name}</h3>
                            <p className="text-muted-foreground text-xs px-auto text-[#616161]">{data.role}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <Clients/>
        </>
    )
}