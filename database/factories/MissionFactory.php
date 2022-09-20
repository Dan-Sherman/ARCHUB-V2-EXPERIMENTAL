<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class MissionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'display_name' => $this->faker->bs(),
            'mode' => 'coop',
            'summary' => $this->faker->catchPhrase(),
            'briefings' => $this->faker->catchPhrase(),
            'map_id' => 0,
        ];
    }
}
