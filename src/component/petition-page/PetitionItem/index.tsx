import TriangleIcon from "/public/images/svg/triangle.svg";
import styles from "./PetitionItem.module.scss";

import {IMockPetition} from "@/app/petition/mockPetition";
import Link from "next/link";
export default function PetitionItem({item}: { item: IMockPetition }) {
    return (
        <tr>
            <td className={styles.label}><Link href={`petition/${item.id}`}>{item.label}</Link> {item.waiting && <TriangleIcon/>}</td>
            <td>№ {item.number}</td>
            <td>{item.dateCreate}</td>
            <td>{item.dateChange}</td>
            <td>{item.dateWrong}</td>
            <td>{item.status}</td>
        </tr>
    
    );
};
