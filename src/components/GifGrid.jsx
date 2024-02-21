import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category)
    console.log({ isLoading })

    return (
        <>
            <div className='title'>
                {isLoading && <h1>Cargando...</h1>}
                <h3>{category}</h3>
            </div>
            <div className='card-grid'>
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    )
}
