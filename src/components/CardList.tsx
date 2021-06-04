import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleViewImage = useCallback((url: string) => {
    setIsModalOpen(true);
    setImageUrl(url);
  }, []);

  return (
    <>
      <SimpleGrid columns={3} gap="40px">
        {cards.map(card => (
          <Card data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isModalOpen}
        imgUrl={imageUrl}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
