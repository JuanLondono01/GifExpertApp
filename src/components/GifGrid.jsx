import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category)
    console.log({ isLoading })

    return (
        <>
            {isLoading && <h2>Cargando...</h2>}
            <div className='title'>
                <h1>{category}</h1>
                <div className='card-grid'>
                    {images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))}
                </div>
            </div>
        </>
    )
}
