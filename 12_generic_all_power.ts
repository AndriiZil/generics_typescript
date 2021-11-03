// Example React.FC

type FunctionalComponent<T extends object = object> = (props: T & { children: any }) => any;

const component: FunctionalComponent = (
    {
        age,
        name,
        children
    }
) => {

}
