-- AlterTable
ALTER TABLE `product` MODIFY `productName` VARCHAR(255) NOT NULL,
    MODIFY `brand` VARCHAR(255) NOT NULL,
    MODIFY `description` TEXT NOT NULL,
    MODIFY `maintenanceInfo` TEXT NOT NULL;
