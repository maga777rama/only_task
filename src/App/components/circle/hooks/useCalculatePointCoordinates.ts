export const calculatePointCoordinates = (
    index: number,
    totalPoints: number,
) => {
    const angle = -(360 / totalPoints) * (index + 0.5);
    const x = Math.cos((angle * Math.PI) / 180) * 266;
    const y = Math.sin((angle * Math.PI) / 180) * 266;
    return { x, y };
};
