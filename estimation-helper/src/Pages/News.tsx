import { useEffect, useState } from "react";
import { URL } from "../utils/constants/contants";
import LoaderIOS from "../Components/SmallChunks/IosLoder";
import { DotLottiePlayer } from "@dotlottie/react-player";

const News = () => {
    const [news, setNews] = useState({ articles: [] });
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(URL.NEWS)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setNews(data))
            .catch(error => setError(error));
    }, []);

    return (
        <div>
            <section className="w-full py-10 md:py-8 lg:py-10">
                <div className="container grid gap-8 px-4 md:px-6">
                    <div className="flex justify-start">
                        <div>
                            <DotLottiePlayer
                                className='h-[200px]'
                                src={require('../assets/animations/news.lottie')}
                                autoplay
                                loop
                            >
                            </DotLottiePlayer>
                        </div>
                    </div>
                    {news?.articles ?
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {news?.articles.map((article: any) => (
                                <div className="flex flex-col shadow-md rounded-lg overflow-hidden">
                                    <div className="group" >
                                        <img
                                            src={article?.urlToImage === null || article?.urlToImage === undefined ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s' : article?.urlToImage}
                                            width={400}
                                            loading="lazy"
                                            height={225}
                                            alt="News Image"
                                            className="w-full h-[225px] object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex-1 p-4 bg-card">
                                        <div className="space-y-2">
                                            <a href="#" className="block" >
                                                <h3 className="text-lg font-semibold tracking-tight line-clamp-2">
                                                    {article?.title}
                                                </h3>
                                            </a>
                                            <p className="text-muted-foreground line-clamp-3">
                                                {article?.content}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                <div>{article?.publishedAt}</div>
                                                <div>{article?.author}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <LoaderIOS />
                    }

                </div>
            </section>
        </div>
    );
}

export default News;
