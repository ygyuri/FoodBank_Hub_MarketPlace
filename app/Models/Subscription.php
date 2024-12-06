<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'foodbank_id', 'status', 'trial_ends_at', 'subscription_ends_at', 'monthly_fee'
    ];

    // Relationship
    public function foodbank()
    {
        return $this->belongsTo(User::class, 'foodbank_id');
    }
}
