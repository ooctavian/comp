"use client";
import styles from './page.module.css'
import { Card, Title, Divider, Grid, Flex, Text, RingProgress, ThemeIcon, Center, Container, Progress, Space, ActionIcon, rem } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react';

interface RingProps {
  max: number;
  current: number;
  size: number;
}

function ProgressComp(props: RingProps) {
  const progress = parseInt(props.current / props.max * 100);
  let color = 'red';
  if(progress>=50 && progress < 100){
    color = 'yellow';
  } else if(progress==100){
    color = 'green';
  }
  return <RingProgress
    size={250}
    sections={[{ value: progress, color: color }]}
    label={
      <>
        <Center>
          { props.current === props.max ?
            <ActionIcon color={color} variant="light" radius="xl" size="xl">
              <IconCheck style={{ width: rem(22), height: rem(22) }} />
            </ActionIcon>
           :
            <Text c={color} fw={700} ta="center" size="xl">
              {progress}%
          </Text>
          }
       </Center>
      </>
    }
  />
}

export default function Home() {
  return (
    <>
      <main>
        <div style={{width: "40%"}}>
          <Title order={3}>Storage Summary</Title>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
           <Center>
              <ProgressComp max={100} current={100}></ProgressComp>
           </Center>
            <Flex justify="space-between">
              <Text fw={700} ta="left" c="red">Videos</Text>
              <Flex direction="column">
                <Text  c="red">595.1 GB / 5GB</Text>
                <Text ta="right">3.4k videos</Text>
              </Flex>
            </Flex>
          </Card>
        </div>
      </main>
    </>
  )
}
