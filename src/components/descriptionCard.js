export default function DescriptionCard(props){
    return(
        <div className="bg-peach text-white text-center py-28 lg:py-16 px-6 sm:rounded-xl">
            <p className="text-3xl lg:text-5xl font-medium">{props.title}</p>
            <p className="mt-4 text-sm lg:text-base lg:w-1/3 mx-auto">{props.description}</p>
        </div>
    )
}