import * as Popover from '@radix-ui/react-popover';

const Home = () => (
    <div>
        <Popover.Root>
            <Popover.Trigger>Click me</Popover.Trigger>
            <Popover.Portal forceMount>
                <Popover.Content>
                    <p>popover content</p>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    </div>
);

export default Home;