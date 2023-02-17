import { useWindowDimensions } from 'react-native';
import Animated, {
    useAnimatedSensor,
    SensorType,
    useAnimatedStyle,
    interpolate,
    withTiming
} from 'react-native-reanimated';

const IMG_OFFSET = 100;
const PI = Math.PI;
const HALF_PI = PI / 2;

export default function SensorAnimatedImage({ image, zindex }) {

    const { width, height } = useWindowDimensions();

    const sensor = useAnimatedSensor(SensorType.ROTATION);
    const imgStyle = useAnimatedStyle(() => {
        const { yaw, pitch, roll } = sensor.sensor.value;
        return {
            top: withTiming(interpolate(pitch, [-HALF_PI, HALF_PI], [(-IMG_OFFSET * 2) / zindex, 0]), { duration: 50 }),
            left: withTiming(interpolate(roll, [-PI, PI], [(-IMG_OFFSET * 2) / zindex, 0]), { duration: 50 }),
        };
    });


    return (
        <Animated.Image
            source={image}
            style={[{
                width: width + (2 * IMG_OFFSET)/zindex,
                height: height + (2 * IMG_OFFSET)/zindex,
                position: 'absolute',
            }, imgStyle]}

        />
    );
}

