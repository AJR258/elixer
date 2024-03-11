import RowGap from "../sizedBox/RowGap";
import Image from "next/image";

interface Props {
  className?: string | undefined;
  size?: number;
  textSize?: number;
}

function Brand(prop: Props) {
  return (
    <table className={prop.className}>
      <tbody>
        <tr>
          <td>
            <Image
              src="/logo.png"
              alt={""}
              width={prop.size ?? 30}
              height={prop.size ?? 30}
            />
          </td>
          <td>
            <RowGap gap={6} />
          </td>
          <td>
            <p style={{ fontSize: prop.textSize ?? 24 }}>elixer</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Brand;
