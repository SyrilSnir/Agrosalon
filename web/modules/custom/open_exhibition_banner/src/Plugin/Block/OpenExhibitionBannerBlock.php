<?php

namespace Drupal\open_exhibition_banner\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'OpenExhibitionBanner' Block.
 *
 * @Block(
 *   id = "open_exhibition_banner_block",
 *   admin_label = @Translation("Open Exhibition Banner"),
 *   category = @Translation("Agrosalon"),
 * )
 */
class OpenExhibitionBannerBlock extends BlockBase
{
    //put your code here
    public function build(): array
    {
        $date = new \DateTime();
        $date->setDate(2020, 10, 6);
        $currentDate = new \DateTime();
        $interval = $currentDate->diff($date);
        $daysCount = $interval->days;
        $title = $this->t('The fair will be opened in');
        $daysCountText = $this->formatPlural($daysCount, '1 day','@count days');
       // \Drupal::translation()->formatPlural($count, $singular, $plural, $args);      
        return [
            'second' => [
                '#theme' => 'base_banner',
                '#cache' => [
                    'max-age' => 0
                ],
                '#title' => $title,
                '#days' => $daysCountText
            ]
        ];
    }

}
