import data from '../Data/IndoreTeam.json'
import '../index.css'
export default function OurTeam() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Team Indore</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {data.map((data, index) => {
                    return (
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-32 mb-4">
                                <img
                                    src={data.image}
                                    alt="image"
                                    className="rounded-full w-full h-full object-cover imagesTeam"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-1">{data.name}</h3>
                            <p className="text-muted-foreground text-sm">{data.role}</p>
                        </div>
                    )
                })}           </div>
        </div>
    )
}