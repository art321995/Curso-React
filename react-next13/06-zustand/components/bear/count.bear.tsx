import { useBearsStore } from "@/store/bears.store"


const CountBear = () => {
    const bear = useBearsStore((state) => state.bears);

    return <div> CountBear: {bear}</div>;
};

export default CountBear;